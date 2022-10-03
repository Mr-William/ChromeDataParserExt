


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
            
        var source = document.getElementsByTagName('html')[0].innerHTML;
        var doc = new DOMParser().parseFromString(source, 'text/html');
        var patientName = source.match(/>(.+) » Patients » The Joint/);
        var birth = source.match(/title=\"((\d\d\/\d\d\/\d\d\d\d))\"/);
        var phones = source.match(/title=\"((\d\d\d)-(\d\d\d)-(\d\d\d\d))\"/);
        var street = doc.getElementsByClassName('address_street detail');
        var city = doc.getElementsByClassName('address_city detail');
        var state = doc.getElementsByClassName('address_state detail');
        var zip = doc.getElementsByClassName('address_zip detail');
        var prodInfo = doc.querySelector('[data-fieldname="producttype_c"]');
        var prod = prodInfo.getElementsByClassName('ellipsis_inline');
        var product = prod[0].innerText.trim();
        var address = street[1].innerText.trim() + ' ' + city[1].innerText.trim()
                    + ' ' + state[1].innerText.trim() + ' ' + zip[1].innerText.trim();
        
        var medElg = ' ';
        var med = doc.querySelector('[data-fieldname="ismedicareeligible_c"]').getElementsByClassName('detail')[0].innerHTML;
        if(med.includes('checked=')){
            medElg = 'Y';
        }else{
            medElg = 'N';
        }
        
        var mil = ' ';
        var isMil = doc.querySelector('[data-fieldname="is_military"]').getElementsByClassName('detail')[0].innerHTML;
        if(isMil.includes('checked=')){
            mil = 'Y';
        }else{
            mil = 'N';
        }
        
        var hsaFSA = ' ';
        var hasFSA = doc.querySelector('[data-fieldname="hsa_or_fsa"]').getElementsByClassName('detail')[0].innerHTML;
        if(hasFSA.includes('checked=')){
            hsaFSA = 'Y';
        }else{
            hsaFSA = 'N';
        }
        
        var info = '====Info Received====' + '\n'
              +'Patient Name: ' + patientName[1] + '\n'
              +'Patient DOB:  ' + birth[1] + '\n'
              +'Patient Address:  ' + address + '\n'
              +'Patient Phone: ' + phones[1] + '\n'
              +'Product:  ' + product + '\n'
              +'MEP:  ' + medElg + '\n'
              +'Military:  ' + mil + '\n'
              +'HSA/FSA:  ' + hsaFSA + '\n';
        
        alert(info);
                
        var patientInfo = {
            "Name" : patientName[1],
            "DOB" : birth[1],
            "Address": address,
            "Phone" : phones[1],
            "ProductType" : product,
            "MEP" : medElg,
            "Military" : mil,
            "HSAorFSA" : hsaFSA
        };
        
        fetch('https://script.google.com/macros/s/AKfycbwxvsapOAtAwgbobXIKsX2l3ixElKCkzReHIQkL2cpkjEiIgg2_/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(patientInfo),
                });
        
                
        
}
  });