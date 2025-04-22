function gerarQRCode() {
  const url = document.getElementById('url').value;
  if (!url) {
    alert('Por favor, insira um link válido.');
    return;
  }

  const qrcodeDiv = document.getElementById('qrcode');
  qrcodeDiv.innerHTML = '';

  const qrcode = new QRCode(qrcodeDiv, {
    text: url,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  const dataAtual = new Date().toLocaleString();
  const historico = document.getElementById('historico');
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td><a href="${url}" target="_blank">${url}</a></td>
    <td>${dataAtual}</td>
    <td><div class="miniQR"></div></td>
  `;
  historico.appendChild(novaLinha);

  // Criação do QR Code em miniatura para a tabela
  new QRCode(novaLinha.querySelector('.miniQR'), {
    text: url,
    width: 50,
    height: 50
  });

  document.getElementById('url').value = '';
}
