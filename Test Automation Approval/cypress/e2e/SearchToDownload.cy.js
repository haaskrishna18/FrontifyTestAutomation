import { MediaLibraryElements } from "../../PageObject/PageActions/MediaLibraryAction";

const MediaLibrary_Elements = new MediaLibraryElements


describe('Media Library', () => {
  // Define testSiteUrls at the testsuite level
  let testSiteUrls;
  // Define a variable to store the random query index
  let randomQueryIndex;
  beforeEach(() => {
    cy.fixture("testSiteUrls.json").then((data) => {
      testSiteUrls = data;
    });

    cy.fixture("searchQueries.json").then((data) => {

      cy.wrap(data.positiveSearchQueries).as("positiveSearchQueries");
      cy.wrap(data.negativeSearchQueries).as("negativeSearchQueries");

    });
  })
  it('Should Search positive query, Download first asset, verify functional Original', () => {

    //End-to-end test case, item searched, selected, properties verified and downloaded.

    cy.visit('/', { timeout: 6000 })
    MediaLibrary_Elements.MediaLibraryTAb()

    cy.get("@positiveSearchQueries").each((query) => {
      MediaLibrary_Elements.SearchQuery(query);
      MediaLibrary_Elements.SearchBTN()
      MediaLibrary_Elements.SelectImage()
      //MediaLibrary_Elements.Imagetitle()  
      //MediaLibrary_Elements.Format()      
      //MediaLibrary_Elements.FileSize()
      //MediaLibrary_Elements.Resolution()
      MediaLibrary_Elements.Select_Options()
      MediaLibrary_Elements.Verify_Download()
      //
      cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () { doc.location.reload() }, 5000)
        })
        MediaLibrary_Elements.Download_File()
      })
      MediaLibrary_Elements.BackButton()
    })
  })
})
