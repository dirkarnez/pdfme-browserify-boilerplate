const { BLANK_PDF, generate } = require("@pdfme/generator");
  
const template_MinimalDemo = {
    basePdf: BLANK_PDF,
    schemas: [
        {
            a: {
                type: 'text',
                position: { x: 0, y: 0 },
                width: 10,
                height: 10,
            },
            b: {
                type: 'text',
                position: { x: 10, y: 10 },
                width: 10,
                height: 10,
            },
            c: {
                type: 'text',
                position: { x: 20, y: 20 },
                width: 10,
                height: 10,
            },
        },
    ],
};

module.exports = {
    generateMinimalDemo: function(callback) {
        generate({ 
            template: template_MinimalDemo, 
            inputs: [{ a: 'a1', b: 'b1', c: 'c1' }] 
        })
        .then(pdf => {
            const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
            callback(URL.createObjectURL(blob));
        });
    },
    generate: function(template, inputs, callback) {
        generate({ template, inputs })
        .then(pdf => {
            const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
            callback(URL.createObjectURL(blob));
        });
    }
}