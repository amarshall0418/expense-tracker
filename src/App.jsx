import IncomeForm from "./components/IncomeForm";
import reactLogo from "./assets/react.svg";
import ExpenseForm from "./components/ExpenseForm";
import FetchExpense from "./components/FetchExpense";
import FetchIncome from "./components/FetchIncome";
import Header from "./components/Header";
import Footer from "./components/Footer";

// custom css
import "./App.css";
// import DisplayFAQs from "./components/DisplayFAQs";

function App() {
  return (
    <>
      <Header />
      <section className="container">
        <IncomeForm />
        <FetchIncome />
      </section>
      <section className="container">
        <ExpenseForm />
        <FetchExpense />
      </section>
      {/* <DisplayFAQs />
      <ContactForm /> */}
      <Footer />
    </>
  );
}

export default App;
