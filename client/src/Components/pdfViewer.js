import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

const PdfViewer = ({path}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const zoomPluginInstance = zoomPlugin()

    return (
        <div className='iframe' style={{ height: '75vh' ,display:"flex" ,justifyContent:"center"}}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={path}
                    plugins={[defaultLayoutPluginInstance , zoomPluginInstance]}
                    onLoadError
                />
            </Worker>
            {/* <iframe className="iframe" src={path} width="100%" height="100%" title="View"
            style={{backgroundColor:'#6D3D21'}}/> */}
        </div>
    );
};

export default PdfViewer;