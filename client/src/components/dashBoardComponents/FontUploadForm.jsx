import { useContext, useEffect, useState } from "react";
import { FontUploadContext } from "../../context/FontUploadContext";
import toast from "react-hot-toast";
import useFont from "../../hooks/useFont";
import Loader from "../Loader";
import Layout from "./DashboardLayout";

const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#005ac8] via-blue to-[#00e55b] inline-block text-transparent bg-clip-text";

const FlowSteps = () => {
  const { currentStep, uploadStates } = useContext(FontUploadContext);
  return (
    <div className="h-full min-h-screen w-36 py-5 flex flex-col justify-center items-center">
      {uploadStates.map((s, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <span
            className={`flex justify-center items-center h-10 aspect-square rounded-full ${
              currentStep === index ? GRADIENT_TEXT : "bg-transparent text-gray"
            }  `}
          >
            {index}
          </span>

          {index !== uploadStates.length - 1 && (
            <div className="w-0.5 h-7 bg-gray rounded-full my-3"></div>
          )}
        </div>
      ))}
    </div>
  );
};

const Step1 = () => {
  const { fontData, UpdateFontName, UpdateFontSlug, NextStep } =
    useContext(FontUploadContext);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mb-10">
        <h1 className={`text-4xl ${GRADIENT_TEXT}`}>Give Font Name</h1>
      </div>
      {/* Inputs */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="fontName" className="text-sm m-2">
            Font name
          </label>
          <input
            className="border-2 border-gray rounded-lg w-[20rem] py-3 px-5 bg-black placeholder:text-sm placeholder:font-light placeholder:text-[#404040]"
            type="text"
            name="fontName"
            placeholder="Poppins"
            value={fontData.fontName}
            onChange={(e) => UpdateFontName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fontName" className="text-sm m-2">
            Font Slug
          </label>
          <input
            className="border-2 border-gray rounded-lg w-[20rem] py-3 px-5 bg-black placeholder:text-sm placeholder:font-light placeholder:text-[#404040]"
            type="text"
            name="fontName"
            placeholder="poppins"
            value={fontData.fontSlug}
            onChange={(e) => UpdateFontSlug(e.target.value)}
          />
          <p className="text-xs m-2 text-gray">
            use lowercase and (-) hypens to write slug
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-10 mt-5">
        <div className="w-[20rem] flex gap-2 justify-between p-1">
          <button
            className="bg-blue py-2 px-9 rounded-xl w-full"
            onClick={NextStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Step2 = () => {
  const {
    fontData,
    currentStep,
    PreviousStep,
    NextStep,
    uploadStates,
    UpdateFontDetail,
  } = useContext(FontUploadContext);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mb-10">
        <h1 className={`text-4xl ${GRADIENT_TEXT}`}>Font Description</h1>
      </div>

      <div className="flex flex-col">
        <label htmlFor="fontName" className="text-sm m-2">
          Font Description (Optional)
        </label>
        <textarea
          className="border-2 border-gray rounded-lg w-[20rem] py-3 px-5 bg-black placeholder:text-sm placeholder:font-light placeholder:text-[#404040]"
          name="fontName"
          placeholder={`${fontData.fontName} is a ...`}
          value={fontData.fontDetails}
          onChange={(e) => UpdateFontDetail(e.target.value)}
        />
      </div>

      <div className="w-full flex justify-center items-center gap-10 my-10">
        <div className="w-[20rem] flex gap-2 justify-between p-1">
          <button
            className={`bg-transparent text-gray py-2 px-9 rounded-xl border border-black hover:border hover:border-gray ${
              currentStep === 0 && "cursor-not-allowed hover:border-black"
            }`}
            disabled={currentStep === 0}
            onClick={PreviousStep}
          >
            Back
          </button>
          {currentStep < uploadStates.length - 1 && (
            <button className="bg-blue py-2 px-9 rounded-xl" onClick={NextStep}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Step3 = () => {
  const [fontWeight, setFontWeight] = useState("");
  const [fontWeightName, setFontWeightName] = useState("");
  const [fontFile, setFontFile] = useState(null);

  const {
    fontWeights,
    currentStep,
    PreviousStep,
    NextStep,
    uploadStates,
    PushFontWeights,
  } = useContext(FontUploadContext);

  useEffect(() => {
    console.log(fontWeight);
    console.log(fontFile);
  }, [fontWeight, fontFile]);

  function CheckField() {
    if (fontFile !== null && fontWeight !== "" && fontWeightName !== "") {
      PushFontWeights(fontWeight, fontWeightName, fontFile);
      MakeEmpty();
    } else {
      toast("Fill all the fields", {
        icon: "❗",
      });
    }
  }

  function MakeEmpty() {
    setFontWeight("");
    setFontWeightName("");
    setFontFile(null);
  }

  const FONTWEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="">
        <h1 className={`text-4xl ${GRADIENT_TEXT}`}>Font Weight</h1>
      </div>

      {fontWeights.length > 0 && (
        <>
          <span className="my-5">Fonts in the bucket</span>
          <div className="w-3/4 p-3 border-2 border-gray border-dashed rounded-lg flex justify-start items-center gap-5">
            {fontWeights.map((w) => (
              <span key={w.fontWeight}>{w.fontWeight}</span>
            ))}{" "}
          </div>
        </>
      )}

      <div className=" w-3/4 flex justify-between gap-5 mt-10">
        <div className="flex items-center justify-center h-15 ">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-full border-gray border-2  border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700 hover:bg-gray-100 border-gray-600 hover:border-gray-500 hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 px-3">
              {!fontFile ? (
                <>
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-400">WOFF2, TTF</p>
                </>
              ) : (
                <>
                  <h1>{fontFile.name}</h1>
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={(e) => setFontFile(e.target.files[0])}
            />
          </label>
        </div>

        <div className="flex flex-col col-span-2 gap-2">
          <div className="flex flex-col">
            <label htmlFor="fontWeight" className="text-sm mb-2">
              Font Weight
            </label>
            <input
              className="border-2 border-gray rounded-lg w-[20rem] py-3 px-5 bg-black placeholder:text-sm placeholder:font-light placeholder:text-[#404040]"
              type="text"
              name="fontWeight"
              placeholder="100"
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fontWeightName" className="text-sm m-2">
              Font Weight Name
            </label>
            <input
              className="border-2 border-gray rounded-lg w-[20rem] py-3 px-5 bg-black placeholder:text-sm placeholder:font-light placeholder:text-[#404040]"
              type="text"
              name="fontWeightName"
              placeholder="Thin"
              value={fontWeightName}
              onChange={(e) => setFontWeightName(e.target.value)}
            />
          </div>

          <button
            className="bg-blue py-2 px-9 rounded-xl my-5"
            onClick={CheckField}
          >
            Add
          </button>
        </div>
      </div>

      <hr className="border-t border-gray" />

      <div className="w-3/4 flex gap-2 justify-between p-1 mt-6">
        <button
          className={`bg-transparent text-gray py-2 px-9 rounded-xl border border-black hover:border hover:border-gray ${
            currentStep === 0 && "cursor-not-allowed hover:border-black"
          }`}
          disabled={currentStep === 0}
          onClick={PreviousStep}
        >
          Back
        </button>
        {currentStep < uploadStates.length - 1 && (
          <button className="bg-blue py-2 px-9 rounded-xl" onClick={NextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const Step4 = ({ setCurrentTab }) => {
  const { fontData, currentStep, PreviousStep, fontWeights } =
    useContext(FontUploadContext);

  const fontHook = useFont();

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    await fontHook.uploadFonts(fontData, fontWeights).then(() => {
      setLoading(false);
    });
    setCurrentTab("overview");
  }

  if (!loading)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="mb-10">
          <h1 className={`text-4xl ${GRADIENT_TEXT}`}>Finish...</h1>
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="bg-blue py-2 px-9 rounded-xl"
            onClick={handleSubmit}
          >
            Upload
          </button>

          <button
            className={`bg-transparent text-gray py-2 px-9 rounded-xl border border-black hover:border hover:border-gray ${
              currentStep === 0 && "cursor-not-allowed hover:border-black"
            }`}
            disabled={currentStep === 0}
            onClick={PreviousStep}
          >
            Back
          </button>
        </div>
      </div>
    );
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
};

const FontUploadForm = ({ setCurrentTab }) => {
  const { currentStep } = useContext(FontUploadContext);

  return (
    <Layout>
      <div className="flex w-full h-full min-h-screen ">
        {/* States */}
        <FlowSteps />

        <div className="h-full w-full place-content-center">
          {currentStep === 0 && <Step1 />}
          {currentStep === 1 && <Step2 />}
          {currentStep === 2 && <Step3 />}
          {currentStep === 3 && <Step4 setCurrentTab={setCurrentTab} />}

          {/* <NavigationButton /> */}
        </div>
      </div>
    </Layout>
  );
};

export default FontUploadForm;
