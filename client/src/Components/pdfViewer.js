// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css'; 
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({path}) => {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '75vh' , width:`calc(100vw - 64px)`,display:"flex" ,justifyContent:"center"}}>
            {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl='../Files/test.pdf'
                    plugins={[defaultLayoutPluginInstance]}
                    onLoadError
                />
            </Worker> */}
            <iframe className="iframe" src={path} width="100%" height="100%" title="View"
            style={{backgroundColor:'#6D3D21'}}/>
        </div>
    );
};

export default PdfViewer;