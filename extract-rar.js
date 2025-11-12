const fs = require('fs');
const unrar = require('node-unrar-js');

async function extractRar() {
  try {
    const buf = Uint8Array.from(fs.readFileSync('/vercel/sandbox/uploads/Nouveau dossier.rar')).buffer;
    const extractor = await unrar.createExtractorFromData({ data: buf });
    const list = extractor.getFileList();
    const fileHeaders = [...list.fileHeaders];
    
    console.log('Files in archive:');
    fileHeaders.forEach(header => {
      console.log(`- ${header.name}`);
    });
    
    const extracted = extractor.extract({ files: fileHeaders.map(h => h.name) });
    const files = [...extracted.files];
    
    files.forEach(file => {
      const outputPath = `/vercel/sandbox/uploads/${file.fileHeader.name}`;
      const dir = outputPath.substring(0, outputPath.lastIndexOf('/'));
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, Buffer.from(file.extraction));
      console.log(`Extracted: ${file.fileHeader.name}`);
    });
    
    console.log('Extraction complete!');
  } catch (err) {
    console.error('Error:', err);
  }
}

extractRar();
