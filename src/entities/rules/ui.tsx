import {useContext, useState} from "react";
import {UserInfo} from "shared/lib/constants";
import {setKeyStorage} from "shared/lib/utils";
import {UserContext} from "shared/lib/contexts";
import {RulesPanel} from "./ui/rules-panel";
import {RulesForm} from "./ui/rules-form";
import {RulesChoiceLevel} from "./ui/rules-choice-level";

export const Rules = () => {
  const [firstName, setFirstName] = useState('');
  const {auth, setAuth} = useContext(UserContext);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setKeyStorage(UserInfo.Name, firstName);
    setAuth(!!firstName)
  }

  return (
    <>
      {!auth &&
        <RulesForm
          handleSubmit={handleSubmit}
          setFirstName={setFirstName}
        />
      }
      {auth &&
        <>
          <RulesPanel/>
          <RulesChoiceLevel/>
        </>
      }
    </>
  )
}
