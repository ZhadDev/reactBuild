import { Wizard } from "./../wizard/Wizard";
import { FieldUniversal } from "../fieldUniversal/componentFields/FieldUniversal";
import { FORM_WIZARD_1, FORM_WIZARD_2 } from "./../examples/objectFormExample";

const FormWiz = ({ steep = 1 }) => {
  let newObj = FORM_WIZARD_1.filter((item) => item.VISIBLE);

  if (steep === 2) {
    newObj = FORM_WIZARD_2.filter((item) => item.VISIBLE);
  }

  const getValueField = (id, value, isValid) => {
    console.log(`id:${id} value:${value} isValid:${isValid}`);
  };

  const onCreateField = (value) => {
    console.log("si llego: ", value);
  };

  return (
    <>
      {newObj.map((newObj) => {
        return (
          <div key={newObj.KEY}>
            <FieldUniversal
              key={newObj.KEY}
              id={newObj.ID}
              label={newObj.LABEL}
              type={newObj.TYPE}
              maxlength={newObj.MAX_LENGTH}
              minStr={newObj.LOW_LENGTH}
              maxStr={newObj.MAX_LENGTH}
              mandatory={newObj.MANDATORY}
              iconMndtory={newObj.MANDATORY}
              visible={newObj.VISIBLE}
              disabled={newObj.DISABLED}
              value={newObj.VALUE}
              expReg={newObj?.EXP_REG}
              getValue={getValueField}
              onCreateFrg={onCreateField}
              autoComplete={newObj?.AUTO_COMPLETE}
              foreignDao={newObj.FOREING_DAO}
              readOnly={newObj.TYPE === "foreign"}
            />
          </div>
        );
      })}
    </>
  );
};

export const ExampleWizard = () => {
  const objWizar = {
    numStepper: [1, 2],
  };

  return (
    <>
      <Wizard objWizar={objWizar}>
        <FormWiz steep={1} />
        <FormWiz steep={2} />
      </Wizard>
    </>
  );
};
