import * as os from 'os';
import {generate } from 'multiple-cucumber-html-reporter';
interface PlatformInfo{
    name:string;
    version: string;
}
function getPlatformInfo(): PlatformInfo {
    return{
        name: os.platform(),
        version : os.release()
    };
}

function generateReport(){
    const PlatformInfo: PlatformInfo = getPlatformInfo();
    generate({
        jsonDir:"report-results",
        openReportInBrowser:true,
        reportPath :"./report-results",
        reportName :"skillsmax AI",
        displayDuration : true,
        metadata:{
            browser:{
                name :"chrome",
                version : "121",
            },
            device: os.hostname(),
            platform : PlatformInfo,
        },
    });
}
generateReport();