import { IoDocumentTextOutline } from "react-icons/io5";
import { CgLoadbarDoc } from "react-icons/cg";
import { MdDone } from "react-icons/md";
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { LuClipboard } from "react-icons/lu";
import XButton from '../../xcomponents/xbutton';
import XToast from "../../xcomponents/xtoast";

export const ToastPageElement = {
  type: 'toastpage',
  label: 'Toast',
};

export function ToastPageContent() {
  const [copy, setCopy] = useState(false);
  const [copyInstall, setCopyInstall] = useState(false);
  const [selectedTab, setSelectedTab] = useState('preview');
  const [showToast, setShowToast] = useState(false);

const codeString = `import XToast from "@/xcomponents/toastpage"

export function ToastDemo() {
  return <XToast variant="primary">Button</XToast>
}`;

const installString=`npx xsans add xtoast`

  return (
    <div className="w-full h-full p-9 flex flex-col gap-9">

      <div className="w-[850px] h-[150px] bg-gradient-to-b from-[#dddddd] to-[#747474] text-white p-5 rounded-lg flex flex-col gap-2">
        <h1 className="text-3xl font-notosans font-bold text-slate-900 ">Toast</h1>
        <p className="font-notosans text-slate-800 font-medium">Displays a Toast or a component that looks like a Toast</p>
        <div className="mt-3 flex gap-5">
          <button className="bg-slate-400 px-2 rounded-md text-black text-sm font-semibold flex items-center gap-1" >Docs <IoDocumentTextOutline/></button>
          <button className="bg-slate-400 px-2 rounded-md text-black text-sm font-semibold flex items-center gap-1" >API Reference <IoDocumentTextOutline/></button>
        </div>
      </div>
      
      <div className="flex flex-col gap-5 w-[70%]">
        <lable className='font-notosans text-2xl font-bold'>Installation</lable>
        <hr className="bg-slate-500 h-[1px] w-full border-none"/>
        <div className="flex bg-[#17171b] w-full h-fit justify-between items-center rounded-lg p-2 border border-[#28282d]">
              <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ backgroundColor: "#17171b" }} wrapLongLines={true}>
                {installString}
              </SyntaxHighlighter>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopyInstall(true);
                  setTimeout(() => {
                    setCopyInstall(false);
                  }, 3000);
                }}
                className="hover:bg-slate-600 w-6 h-6 flex justify-center items-center mr-1 hover:rounded-md"
              >
              {copyInstall ? (
                  <span className="flex items-center gap-1 text-[12px] text-slate-200 font-medium mr-9">
                    <MdDone className="text-[15px]" />Copied!
                  </span>
                ) : (
                  <LuClipboard  className="text-slate-400"/>
                )}
              </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[70%]">
         <lable className='font-notosans text-2xl font-bold'>Examples</lable>
         <hr className="bg-slate-500 h-[1px] w-full border-none"/>

         <div className="w-full h-[250px] flex flex-col gap-3 mt-5">
           <lable className='font-notosans text-xl font-semibold'>Simple Toast</lable>
           <nav className="border-b border-slate-500 pb-2">
             <div className="space-x-3">
                <a className={` ${selectedTab === 'preview' ? 'border-b pb-2.5 font-medium' : ''}`}
                  href="#"
                  onClick={() => setSelectedTab('preview')}
                >Preview</a>
                <a className={`${selectedTab === 'code' ? 'border-b pb-2.5 font-medium' : ''}`}
                  href="#"
                  onClick={() => setSelectedTab('code')}
                >
                Code
                </a>
             </div>
           </nav>
          {/* preview section */}
          {selectedTab === 'preview' && (
            <div className="flex bg-[#17171b] items-center justify-center mt-2 w-full h-[250px] rounded-lg">
                  <XButton onClick={() => {setShowToast(true);}}>Show Toast</XButton>
                  {showToast && (
                    <XToast
                      title= "Uh oh! Something went wrong."
                      description= "There was a problem with your request."
                      action={<button className="text-sm border px-5 py-1 rounded-md">Undo</button>}
                      type="error"
                      onClose={() => setShowToast(false)}
                    />
                  )}
            </div>
          )}
          {/* code section */}
          {selectedTab === 'code' && (
            <div className="flex bg-[#17171b] mt-2 w-full h-[250px] justify-between rounded-lg p-2 border border-[#28282d]">
              <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ backgroundColor: "#17171b" }} wrapLongLines={true}>
                {codeString}
              </SyntaxHighlighter>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
                }}
                className="hover:bg-slate-600 w-6 h-6 flex justify-center items-center hover:rounded-md"
              >
              {copy ? (
                  <span className="flex items-center gap-1 text-[12px] text-slate-200 font-medium mr-9">
                    <MdDone className="text-[15px]" />Copied!
                  </span>
                ) : (
                  <LuClipboard  className="text-slate-400"/>
                )}
              </button>
            </div>
          )}
         </div>
        
      </div>
      
    </div>
  );
}
