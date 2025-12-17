import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import { GlobalProvider } from './context/GlobalContext';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <GlobalProvider>
        <div>
          {this.childComponents}
          {this.childPages}
        </div>
      </GlobalProvider>
    );
  }
}

export default withModel(App);
