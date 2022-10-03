window.onload = function() {
  document.querySelector('button').addEventListener('click', function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      let init = {
        method: 'GET',
        mode: 'no-cors',
        async: true,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        'contentType': 'json'
      };
        console.log(token);
      fetch(
          '      https://docs.google.com/spreadsheets/d/1sMvk_Za06mr-byyxEnbSfR0crowqCGhep3Rk7pU9rLU/edit#gid=0&key=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApGj/E2F69Y2Ux8NLM/4rSWU4v7O0t6y92Va+w/3JlWhh+AUjbft0ZAwxqpQ7hbDXiHT3WVn1/wgcgfYm65D7w1xFUcwl8I0PwjccmyHB8IQbbyWsU+maIUq/3P2eaHoDoms26svn6gakD2bbZXNVSfoGNqd3OuJbQRfx9KyIC+UX5u7B1NI+NcI3nxmArnRZFZjJ35MOGEDkvEfn4YAVVwRjVMnVnjVNP7ujOcAf+vL0sn3pUNC5BXYx72ArojCMWH09prvIjk5r26Q9XloqoSjO+QIGBlPyUxiZ0xMfmRYZNh9OFr4C7osL2QydA+FEJNYvzydGLYioNKhQHecUgwIDAQAB',
          init)
          //.then((response) => response.json())
          .then(function(data) {
            console.log(data)
          });
    });
  });
};