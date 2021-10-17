import classes from './ReportList.module.css';
import { Link } from 'react-router-dom';

function ReportList(props) {
  return (
    <ul className={classes.list}>
      <li><Link to='/report/turnover'>Turnover Report</Link></li>
    </ul>
  );
}

export default ReportList;