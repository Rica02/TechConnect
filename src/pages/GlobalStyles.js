import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .public-div-container {
    //background-color: ${ ((props) => props.bg) };   // no longer works?
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 100px;
    color: ${ ({ theme }) => theme.colorMain.text };
    border-bottom: solid ${ ({ theme }) => theme.colorMain.highlightMain } 2px;
    min-width: 800px;

    h2 {
      color: ${ ({ theme }) => theme.colorMain.highlightMain };
      text-align: center;
      margin: 30px 0;
    }
    p {
      font-size: large;
    }
  }

  .styled-button {
    background-color: ${ ({ theme }) => theme.colorMain.highlightRed };
    border-radius: 10px;
    padding: 5px 20px;
    color: white;
    border: none;
  }

  .dashboard-div-container {
    background-color: ${ ({ theme }) => theme.colorMain.backgroundLight };
    display: flex;
    flex-direction: column;
    padding: 35px 100px;
    color: ${ ({ theme }) => theme.colorMain.text };
    border-bottom: solid ${ ({ theme }) => theme.colorMain.backgroundDark } 15px;

    h2 {
        color: ${ ({ theme }) => theme.colorMain.highlightMain };
        margin-bottom: 25px;
    }
    h3 {
        font-size: x-large;
        font-weight: 400;
        color: ${ ({ theme }) => theme.colorMain.highlightMain };
        margin-bottom: 25px;
    }
    p {
        font-size: large;
    }
  }

  .dashboard-table {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    background-color: #F0F0F0;

    th {
        background-color: #D9D9D9;
        text-align: center;
    }

    td, th {
        border: ${({theme}) => theme.colorMain.text} 0.5px solid;
        padding: 15px;
    }

    tr:nth-child(odd) {
        background-color: #F0F0F0;
    }

    img {
        width: 60px;
        border: ${({theme}) => theme.colorMain.text} 1px solid;
        margin-right: 15px;
    }
  }

  .styled-link {
    font-weight: bold;
    color: ${({theme}) => theme.colorMain.highlightRed};
    text-decoration: none;

    &:hover {
      color: ${({theme}) => theme.colorMain.highlightRed};
      text-decoration: underline;
    }
  }
`
export default GlobalStyles
