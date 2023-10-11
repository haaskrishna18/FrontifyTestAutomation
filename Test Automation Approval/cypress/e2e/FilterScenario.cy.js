import { MediaLibraryElements } from "../../PageObject/PageActions/MediaLibraryAction";

const MediaLibrary_Elements = new MediaLibraryElements;

describe("Filter Test Cases", () => {
  let testSiteUrls;
  let randomQueryIndex; // Declare randomQueryIndex here

  before(() => {
    cy.fixture("testSiteUrls.json").then((data) => {
      testSiteUrls = data;
    });
  });

  beforeEach(() => {
    cy.fixture("searchQueries").then((data) => {
      cy.wrap(data.queries).as("searchQueries");

      // Generate a random index within the range of available queries
      cy.get("@searchQueries").then((queries) => {
        randomQueryIndex = Math.floor(Math.random() * queries.length);
      });
    });

    cy.visit(testSiteUrls.baseUrl + testSiteUrls.MediaLibrary);
    MediaLibrary_Elements.MediaLibraryTAb();
  });

  it("should display the filter element", () => {
    cy.get("@searchQueries").then((queries) => {
      const query = queries[randomQueryIndex];
      MediaLibrary_Elements.SearchBOx();
      MediaLibrary_Elements.SearchBTN();
      MediaLibrary_Elements.SearchQuery(query);
      MediaLibrary_Elements.SearchBTN();

      // Ensure that the filter element is visible
      MediaLibrary_Elements.Filter();
    });
  });

  it("should open the filter options when the filter button is clicked", () => {
    cy.get("@searchQueries").then((queries) => {
      const query = queries[randomQueryIndex];
      MediaLibrary_Elements.SearchBOx()
      MediaLibrary_Elements.SearchBTN()
      MediaLibrary_Elements.SearchQuery(query)
      MediaLibrary_Elements.SearchBTN();

      // Click the filter button to open the filter options
      MediaLibrary_Elements.FilterOpen()
      // Ensure that the filter options are displayed
      MediaLibrary_Elements.Option1()
      MediaLibrary_Elements.Option2()

    })
  });
  it("should filter by Filetypes", () => {

    MediaLibrary_Elements.FilterOpen()

    // Click on the "Filetypes" filter
    MediaLibrary_Elements.FiletypeFilter()
    // Check the "Images" checkbox
    MediaLibrary_Elements.CheckImage()
    cy.wait(1000)
    // Assuming you have applied the filter in a previous step
    // Check if the filter is applied and the value is greater than 0
    cy.get('span.o-library__filter-selected-label.a-link--color')
      .should('exist')
      .invoke('text')
      .then((text) => {
        const match = text.match(/\d+/); // Try to match the numeric part

        if (match && match.length > 0) {
          const filteredCount = parseInt(match[0]); // Extract and parse the number
          cy.expect(filteredCount).to.be.greaterThan(0); // Assert that the count is greater than 0
        } else {
          // Handle the case where no numeric part was found in the text
          cy.log('No numeric part found in the filter label.');
        }
      });
  })
  
  it("should filter by Usage Type", () => {
    MediaLibrary_Elements.FilterOpen()
    MediaLibrary_Elements.CheckImage()

    // Click on the "Usage type" filter
    MediaLibrary_Elements.UsageFilter()
    // Check the "Print outs" checkbox
    MediaLibrary_Elements.Digitalcheck()


    // Add additional assertions as needed to verify the filter results
  });
  it.only("Clear Filter", () => {
    MediaLibrary_Elements.FilterOpen()
    MediaLibrary_Elements.CheckImage()
    cy.wait(1000)
    // Clear the filter
    MediaLibrary_Elements.ClearFilter()
  })
})


