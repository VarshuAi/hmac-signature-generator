
            window.genHmac = function() {
                const msg = document.getElementById('hmac-msg').value;
                const key = document.getElementById('hmac-key').value;
                const out = document.getElementById('hmac-out');
                if(!msg) return;
                // Mock HMAC signature digest representations
                out.value = "HMAC_" + btoa(msg + "::" + key).substring(0, 32);
            }
        