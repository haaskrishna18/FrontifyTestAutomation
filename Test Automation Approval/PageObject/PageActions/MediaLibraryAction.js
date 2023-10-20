const MediaLibraryPageLocators = require("../PageElements/MediaLibrary_elements.json");

export class MediaLibraryElements {
  MediaLibraryTAb() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.media_libraryTab
    )
      .should("have.text", "media library")
      .click();
  }

  SearchBOx() {
    cy.get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Search_box)
      .should("be.visible")
      .click();
  }

  SearchBTN() {
    cy.contains(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Search_BTN
    )
      .should("have.text", "Search")
      .click();
  }

  SearchQuery(searchquery) {
    cy.get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Search_box)
      .click()
      .clear()
      .type(searchquery);
  }

  SelectImage() {
    cy.get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Select_Image)
      .should("be.visible")
      .eq(0)
      .should("be.visible")
      .click();
  }

  Imagetitle() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Image_Title
    ).should("have.text", "coconut 1");
  }
  Format() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Check_Format
    ).should("have.text", "JPEG");
  }

  FileSize() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.File_Size
    ).should("have.text", "821 KB");
  }
  BackButton() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.backButton
    ).click();
  }

  Resolution() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Resolution
    ).should("have.text", "1296 x 728 px");
  }

  Sizes() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Sizes
    ).should("have.text", "Small");
  }

  Select_Options() {
    //cy.get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Select_Options).should('be.visible').click();
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Select_Options
    )
      .contains("Original")
      .should("be.visible")
      .click();
  }

  Verify_Download() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Verify_Download
    ).should("have.text", "  Download ");
  }

  Download_File() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Download_File
    ).click();
  }

  Filter() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Filter
    ).should("be.visible");
  }

  FilterOpen() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Filter
    ).click();
  }
  Option1() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.FilterOption1
    ).should("have.text", "Filetypes");
  }
  Option1Click() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.FilterOption1
    )
      .contains("Images")
      .click();
  }

  Option2Click() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.FilterOption2
    )
      .contains("Movies")
      .click();
  }

  Option2() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.FilterOption2
    ).should("have.text", "Orientations");
  }
  FiletypeFilter() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.FileType_Filter
    ).click();
  }
  CheckImage() {
    cy.contains(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Images
    ).click();
  }

  OrientationFilter() {
    cy.get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Orientation)
      .should("be.visible")
      .click();
  }

  Landscapecheck() {
    cy.contains(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Landscape
    )
      .should("be.visible")
      .click();
  }
  //       cy.wrap(element)
  //       .invoke('data-w')
  //       .then(parseInt)
  //       .then((width)=>{
  //          cy.wrap(element)
  //          .invoke('data-h')
  //          .then(parseInt)
  //          .then((height)=>{
  // if (width>height) {

  // } else {

  // }

  //          }
  //       }

  //    })
  // })
  // if (width > height)
  //    return -1            // return -1 if element potrait
  // else if (width === height)
  //    return 0             // return 0 if element is square
  // else
  //    return 1             // return 1 if element is landscape

  // .then((yo) => {
  //    element.should('have.attr', 'data-h')
  //       .then(() => {
  //          element.invoke('attr', 'data-h').then((heightValue) => {
  //             height = Number(heightValue)
  //             if (width > height)
  //                return -1            // return -1 if element potrait
  //             else if (width === height)
  //                return 0             // return 0 if element is square
  //             else
  //                return 1             // return 1 if element is landscape
  //          })
  //       })
  // })

  async CompareWidthAndHeight(element) {
    const width = await cy.wrap(element).invoke("attr", "data-w");
    const height = await cy.wrap(element).invoke("attr", "data-h");
    return parseInt(width) - parseInt(height);
  }

  UpdateCountBasedOnOrientation(difference) {
    let portraitCount = 0;
    let landscapeCount = 0;
    let squareCount = 0;
    if (difference > 0) {
      landscapeCount++;
    } else if (difference < 0) {
      portraitCount++;
    } else {
      squareCount++;
    }
    return {
      portrait: portraitCount,
      landscape: landscapeCount,
      square: squareCount,
    };
  }

  GetAssets() {
    return cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.ListOfAssets
    );
  }
  UsageFilter() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.UsageType
    ).click();
  }

  Digitalcheck() {
    cy.contains(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.Digital
    ).click();
  }

  ClearFilter() {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.ClearFilter
    ).click();
  }

  CountMediaElements() {
    // Count the number of image and video elements on the page
    cy.scrollTo("bottom", { ensureScrollable: false }).then(() => {
      return cy.wait(4500);
    });
    return (
      cy
        .get(
          MediaLibraryPageLocators.CreateMediaLibraryPageLocators.ListOfAssets
        ).children()
        .should("have.length.gt", 0)
        // Ensure there are image and video elements on the page
        .then((mediaElements) => {
          console.log(`the length of total elements are ${mediaElements.length}`)
          return mediaElements.length;
        })
    );
  }

  CountVideoElements() {
    // Count the number of image and video elements on the page

    return cy
      .get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.ListOfAssets)
      .find("div > .icon-play.o-library__video-icon")
      .then(($videoElements) => {
        return $videoElements.length;
      });
  }
  CountImageElements() {
    // Count the number of image and video elements on the page
    cy.wait(2500);
    return cy
      .get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.ListOfAssets)
      .find("img[alt]")
      .then(($imgElements) => {
        return $imgElements.length;
      });
  }

  DisplayedCount() {
    // Extract the count from the displayed search result text
    // cy.scrollTo('top',{ensureScrollable: false});
    cy.scrollTo("top", { ensureScrollable: false }).then(() => {
      return cy.wait(4500);
    });
    return cy
      .get(MediaLibraryPageLocators.CreateMediaLibraryPageLocators.AssetsCount)
      .invoke("text")
      .then((text) => {
        //cy.log(text)
        const match = text.match(/\d+/); // Extract numbers from the text
        const displayedCount = match ? parseInt(match[0]) : null; 
        console.log(displayedCount)
        return displayedCount
        //cy.wrap(displayedCount).then(() => {return displayedCount})
      })
  }

  NoMatchesFound(query) {
    cy.get(
      MediaLibraryPageLocators.CreateMediaLibraryPageLocators.NoMatchesFound
    ).should("have.text", `Hm, we can't find any matches for “${query}”.`);
    cy.get(".tw-p-0 > .tw-font-body").should(
      "have.text",
      "Have you checked the spelling? Try a different search term."
    );
  }
}
