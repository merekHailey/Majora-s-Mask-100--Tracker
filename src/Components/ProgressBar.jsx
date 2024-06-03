import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TotalProgressBar(props) {

    



  return (
    <div className='progressBar'>
        
        
        <ProgressBar>
            <ProgressBar variant="success" now={props.numCompleted} min={0} max={100} label={`${Math.floor(props.numCompleted)}%`} key={1} />
            <ProgressBar variant="warning" now={props.numPossible} min={0} max={100} key={2} />
            <ProgressBar animated variant="info" now={props.numPotential} min={0} max={100} key={3} />
        </ProgressBar>
    </div>
  );
}