import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
function ButtonPage() {

    const handleClick = () => {
        console.log('Click')
    }
    return <div>

        <div className="">
            <Button onClick={handleClick} primary rounded>Invok Satan
                <GoBell className="mr-2" />
            </Button>
        </div>
        <div>
            <Button secondary>Invok Lucifer
                <GoCloudDownload className="mr-2" /></Button>
        </div>
        <div>
            <Button outline success>Invok Astaroth
                <GoDatabase className="mr-2" />
            </Button>
        </div>
        <div>
            <Button warning>Invok Bahoteh</Button>
        </div>
        <div>
            <Button danger>Invok Pazuzu</Button>
        </div>




    </div>
}

export default ButtonPage;