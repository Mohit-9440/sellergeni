import { FaCircle,FaSquare } from 'react-icons/fa6';
import './brandstore.css';
import { CiCircleQuestion } from 'react-icons/ci';

export default function BrandStore() {
  return (
    <>
      <div className="brand-store">
        <div className="brand-store-heading">Are you making best use of Brand Store?<CiCircleQuestion color="#a5a5a5"/></div>
        <div className="brand-store-box">
          <div className="brand-store-box-body">
            <div className="brand-store-box-body-data">
              <div className="brand-store-box-body-left"><FaCircle color='red'/>Is 'Brand Store' Live-to allow entire brand portfolio discovery?</div>
              <div className="brand-store-box-body-right"><FaSquare color='#d9d9d9'/></div>
            </div>
            <div className="brand-store-box-body-data">
              <div className="brand-store-box-body-left"><FaCircle color='red'/>Is 'Brand Store' Linked to SB Advertising to drive traffic</div>
              <div className="brand-store-box-body-right"><FaSquare color='#d9d9d9'/></div>
            </div>
            <div className="brand-store-box-body-data">
              <div className="brand-store-box-body-left"><FaCircle color='red'/> Is 'Brand Store' carrying {">"} 3 pages to engage customers</div>
              <div className="brand-store-box-body-right"><FaSquare color='#d9d9d9'/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
