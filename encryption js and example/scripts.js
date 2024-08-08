function caesarCipher(text, shift) {
    return text.split('').map(char => {
        // Harfin alfabetik olup olmadığını kontrol et
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0); // Karakterin ASCII değerini al
            const isUpperCase = (code >= 65 && code <= 90); // Büyük harf mi?
            const baseCode = isUpperCase ? 65 : 97; // Büyükse 65 ('A'), küçükse 97 ('a')
            const newCode = ((code - baseCode + shift) % 26) + baseCode; // Yeni ASCII değeri hesapla
            return String.fromCharCode(newCode); // Yeni karakteri oluştur
        }
        return char; // Harf değilse, karakteri olduğu gibi geri döndür
    }).join(''); // Karakterleri birleştir
}

// Kullanıcıdan aldığı metni ve kaydırma değerini kullanarak metni şifreler
function encryptText() {
    const text = document.getElementById('textInput').value; // Metni al
    const shift = parseInt(document.getElementById('shiftInput').value, 10); // Kaydırma değerini al
    const encryptedText = caesarCipher(text, shift); // Şifreleme işlevini uygula
    document.getElementById('resultOutput').value = encryptedText; // Sonucu göster
}

// Şifrelenmiş metni ve kaydırma değerini kullanarak metni çözer
function decryptText() {
    const text = document.getElementById('textInput').value; // Metni al
    const shift = parseInt(document.getElementById('shiftInput').value, 10); // Kaydırma değerini al
    const decryptedText = caesarCipher(text, -shift); // Çözme işlevini uygula
    document.getElementById('resultOutput').value = decryptedText; // Sonucu göster
}
