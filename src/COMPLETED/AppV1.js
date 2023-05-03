import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {


    return (
        <div>

            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
         
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-3'>
                            <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage} description="Blablablabllslslblls" />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage} description="Blablablabllslslblls" />
                        </div>
                        <div className='column is-3'>
                            <ProfileCard title="Siri" handle="@siri" image={SiriImage}  description="Blablablabllslslblls"/>
                        </div>
                    </div>
                </section>
            </div>



        </div>
    )
};

export default App;