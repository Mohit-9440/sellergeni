import React, { useState, useEffect } from 'react';

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([]);
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const apiUrl = "https://1a1c-49-249-133-226.ngrok-free.app/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setAccordionData(data.data);
      } catch (error) {
        console.error('Error fetching accordion data:', error);
      }
    };

    fetchData();
  }, []);

  const AccordionDetails = ({ path }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await fetch(`${apiUrl}${path}`);
          const data = await response.json();
          setDetails(data);
        } catch (error) {
          console.error('Error fetching accordion details:', error);
        }
      };

      fetchDetails();
    }, [path]);

    const handleDetailClick = (detail) => {
      setSelectedDetail(detail);
    };

    return (
      <div>
        {details && (
          <div className="details-panel">
            <h3>Data of {details.path}</h3>
            <ul>
              {details.data.map((detail, index) => (
                <li
                  key={index}
                  className={`accordion-detail ${selectedDetail === detail ? 'active' : ''}`}
                  onClick={() => handleDetailClick(detail)}
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const handleAccordionClick = (path) => {
    setSelectedAccordion(selectedAccordion === path ? null : path);
    // setSelectedDetail(null);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <div
            className={`accordion ${selectedAccordion === item ? 'active' : ''}`}
            onClick={() => handleAccordionClick(item)}
          >
            {item}
          </div>
          {selectedAccordion === item && <AccordionDetails path={item} />}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
