
import documents.Document;
import factories.WordDocumentFactory;
import factories.PdfDocumentFactory;
import factories.ExcelDocumentFactory;

public class DocumentMain{
    public static void main(String[] args) {
        Document doc1 = new WordDocumentFactory().createDocument();
        doc1.open();

        Document doc2 = new PdfDocumentFactory().createDocument();
        doc2.open();

        Document doc3 = new ExcelDocumentFactory().createDocument();
        doc3.open();
    }
}