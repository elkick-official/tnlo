import { TNHeader, TNSettingsTabingForm } from "../../components";
import "./Settings.css";
const Settings = () => {
    return(
        <>
            <TNHeader children="Settings"/>
            <section className="xx-space yy-space">
                <div className="w-full legency-data-tab-wrap bg-tnl-white mt-0 pl-0">
                    <TNSettingsTabingForm/>
                </div>
            </section>
        </>
    )
}
export default Settings;