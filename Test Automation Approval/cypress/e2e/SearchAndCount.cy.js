import { MediaLibraryElements } from "../../PageObject/PageActions/MediaLibraryAction";

const MediaLibrary_Elements = new MediaLibraryElements();

describe("Media Library Search", () => {
  // Define testSiteUrls at the testsuite level
  let testSiteUrls;
  // Load search queries from the data file
  beforeEach(() => {
    cy.fixture("testSiteUrls.json").then((data) => {
      testSiteUrls = data;
    });
    cy.fixture("searchQueries.json").then((data) => {
      cy.wrap(data.positiveSearchQueries).as("positiveSearchQueries");
      cy.wrap(data.negativeSearchQueries).as("negativeSearchQueries");
    });
  });

  it("Should return all results for empty search", () => {
    cy.visit(testSiteUrls.baseUrl + testSiteUrls.MediaLibrary);

    MediaLibrary_Elements.MediaLibraryTAb();
    MediaLibrary_Elements.SearchBOx();
    MediaLibrary_Elements.SearchBTN();

    

    // cy.wrap(null).then(()=> { totalMediaCount = MediaLibrary_Elements.CountMediaElements()}).then(() => {
    // displayedCount = MediaLibrary_Elements.DisplayedCount()})
    // cy.log(`Found ${totalMediaCount} media assets on the page`);
    // cy.expect(displayedCount).to.equal(totalMediaCount);

    MediaLibrary_Elements.CountMediaElements().then((totalMediaCount) => {
      cy.log(`the total media count is ${totalMediaCount}`);
      MediaLibrary_Elements.DisplayedCount().then((displayedCount) => {
        cy.log(`The total media assests displayed are ${displayedCount}`);
        expect(displayedCount).to.equal(totalMediaCount);
      });
    });
  });

  it("Should display results, verify displayed count with actual count of assets", () => {
    cy.visit(testSiteUrls.baseUrl + testSiteUrls.MediaLibrary);

    MediaLibrary_Elements.MediaLibraryTAb();
    MediaLibrary_Elements.SearchBOx();
    MediaLibrary_Elements.SearchBTN();

    cy.get("@positiveSearchQueries").each((query) => {
      MediaLibrary_Elements.SearchQuery(query);
      MediaLibrary_Elements.SearchBTN();
      //WRONG CODE
      // cy.scrollTo("bottom", { ensureScrollable: false }).then(() => {
      //   return cy.wait(3000);
      // });

      // const totalMediaCount = MediaLibrary_Elements.CountMediaElements();
      // const displayedCount = MediaLibrary_Elements.DisplayedCount();
      // cy.log(`Found ${totalMediaCount} media assets on the page`);

      // cy.expect(displayedCount).to.equal(totalMediaCount);
      MediaLibrary_Elements.CountMediaElements().then((totalMediaCount) => {
        cy.log(`the total media count is ${totalMediaCount}`);
        MediaLibrary_Elements.DisplayedCount().then((displayedCount) => {
          cy.log(`The total media assests displayed are ${displayedCount}`);
          expect(displayedCount).to.equal(totalMediaCount);
        });
      });
    });
  });

  it.only("Should display no search results", () => {
    cy.visit(testSiteUrls.baseUrl + testSiteUrls.MediaLibrary);

    MediaLibrary_Elements.MediaLibraryTAb();
    MediaLibrary_Elements.SearchBOx();
    MediaLibrary_Elements.SearchBTN();

    cy.get("@negativeSearchQueries").each((query) => {
      MediaLibrary_Elements.SearchQuery(query);
      MediaLibrary_Elements.SearchBTN();
      MediaLibrary_Elements.NoMatchesFound(query);
    });
  });
});
