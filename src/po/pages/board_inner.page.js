import Page from "./page";

class Board_innerPage extends Page {
  itemFromList(ttl) {
    return $(`a[title="${ttl} (currently active)"]`);
  }

  get pageTitle() {
    return $('h1[data-testid="board-name-display"]');
  }

  get iconSettingsSideMenu() {
    return $(
      'button[aria-label="Board actions menu"] span[data-testid="OverflowMenuHorizontalIcon"] ',
    );
  }

  get btnCloseBoard() {
    return $('button[aria-label="Close board"]');
  }

  get btnCloseConfirm() {
    return $('button[data-testid="popover-close-board-confirm"]');
  }

  get btnAddList() {
    return $('button[data-testid="list-composer-button"]');
  }

  get addListTitle() {
    return $('textarea[data-testid="list-name-textarea"]');
  }

  get btnSubmitAddList() {
    return $('button[data-testid="list-composer-add-list-button"]');
  }

  get list() {
    return $('div h2[data-testid="list-name"]');
  }

  get btnCloseNextList() {
    return $('button[data-testid="list-composer-cancel-button"]');
  }

  get listSettingsIcon() {
    return $('button[data-testid="list-edit-menu-button"]');
  }

  get btnDeleteList() {
    return $('button[data-testid="list-actions-archive-list-button"]');
  }

  get btnAddCard() {
    return $('button[data-testid="list-add-card-button"]');
  }

  get cardTextArea() {
    return $('textarea[data-testid="list-card-composer-textarea"]');
  }

  get btnSubmitAddCard() {
    return $('button[data-testid="list-card-composer-add-card-button"]');
  }

  get card() {
    return $('li[data-testid="list-card"]');
  }

  get btnFilterCard() {
    return $('button[data-testid="filter-popover-button"]');
  }

  get filterSearchInput() {
    return $(
      'input[class="nch-textfield__input lsOhPsHuxEMYEb lsOhPsHuxEMYEb"]',
    );
  }

  get filterCount() {
    return $('div[data-testid="filter-popover-button-filter-count"]');
  }

  get btnCloseNextCard() {
    return $('button[data-testid="list-card-composer-cancel-button"]');
  }
}

module.exports = new Board_innerPage();
