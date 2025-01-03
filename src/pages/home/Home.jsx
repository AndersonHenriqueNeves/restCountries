import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const PdfGenerator = () => {
  const contentRef = useRef();
  const teste = "teste";

  const generatePdf = async () => {
    const content = contentRef.current;

    // Gera o canvas com base no HTML
    const canvas = await html2canvas(content, {
      scale: 2, // Aumenta a escala para melhor qualidade
    });
    const imgData = canvas.toDataURL("image/png");

    // Dimensões do canvas
    const imgWidth = 210; // Largura padrão A4 em mm
    const pageHeight = 297; // Altura padrão A4 em mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Ajuste proporcional
    let heightLeft = imgHeight;

    // Cria o PDF
    const pdf = new jsPDF("p", "mm", "a4");
    let position = 0;

    // Adiciona o conteúdo ao PDF
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Adiciona páginas, se necessário
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Salva o arquivo PDF
    pdf.save("document.pdf");
  };

  return (
    <div>
      {/* Elemento para renderizar no PDF */}
      <div
        ref={contentRef}
        style={{
          padding: "20px",
          background: "#fff",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          border: "1px solid #ccc",
        }}
      >
        <h1>{teste}</h1>
        <p>
          Este é o conteúdo do PDF gerado pelo React. O layout se ajustará
          corretamente para caber no tamanho da folha A4.
        </p>
        <p>
          Adicione mais conteúdo aqui para testar a funcionalidade de várias
          páginas no PDF.
        </p>
      </div>

      {/* Botão para gerar o PDF */}
      <button
        onClick={generatePdf}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Gerar PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
