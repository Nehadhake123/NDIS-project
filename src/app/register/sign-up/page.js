import FormContent from "@/components/Register/SignUpPage/FormContent";
import NavBar from "@/components/Register/SignUpPage/NavBar";
import SignUpContent from "@/components/Register/SignUpPage/SignUpContent";
import { Form } from "react-hook-form";

export default function FindProviders() {
  return (
    <>
        <SignUpContent/>
        <NavBar/>
       <FormContent/>
    </>
  );
}
