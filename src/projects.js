import React, { useState } from 'react';
import './projects.css';
import ClaudeIMG from "../src/images/claude.png";
import QuillbotIMG from "../src/images/quillbot.png";
import TiktokIMG from "../src/images/tiktok.webp";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleModalOpen = (cardId) => {
    setModalOpen(true);
    setSelectedCard(cardId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div id="Projects" className="ProjectSection">
      <div className="ProjectsTexts">
        <p className="ProjectHeader">PROJECTS</p>
      </div>

      <div className="ImageCards">
        <div className="card" id="Claude" onClick={() => handleModalOpen('Claude')}>
          <img src={ClaudeIMG} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Claude</h5>
            <p className="card-text short-desc">is both an AI chatbot and the name for the underlying Large Language Models (LLMs) that power it...</p>
            <p className="card-text full-desc" style={{ display: 'none' }}>is both an AI chatbot and the name for the underlying Large Language Models (LLMs) that power it. Claude is trained to have natural, text-based conversations, and it excels in tasks like summarization, editing, Q&A, decision-making, code-writing, and more.</p>
          </div>
        </div>

        <div className="card" id="Quillbot" onClick={() => handleModalOpen('Quillbot')}>
          <img src={QuillbotIMG} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Quillbot</h5>
            <p className="card-text short-desc"> is an advanced AI-powered online writing and paraphrasing tool is an advanced AI-powered online ...</p>
            <p className="card-text full-desc" style={{ display: 'none' }}>  is an advanced AI-powered online writing and paraphrasing tool is an advanced AI-powered online. It makes use of cutting-edge natural language processing (NLP) techniques to help users write better, come up with new phrases, and improve the clarity and quality of their content.</p>
          </div>
        </div>

        <div className="card" id="Tiktok" onClick={() => handleModalOpen('Tiktok')}>
          <img src={TiktokIMG} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Tiktok</h5>
            <p className="card-text short-desc">is a popular social media app that allows users to create, watch, and share short videos...</p>
            <p className="card-text full-desc" style={{ display: 'none' }}> is a popular social media app that allows users to create, watch, and share short videos shot on mobile devices or webcams. With its personalized feeds of quirky short videos set to music and sound effects, the app is notable for its addictive quality and high levels of engagement.</p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className={`modal ${selectedCard}`}>
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            {selectedCard === 'Claude' && (
              <div>
                <img src={ClaudeIMG} className="modal-img" alt="Claude" />
                <h5>Claude</h5>
                <p>is both an AI chatbot and the name for the underlying Large Language Models (LLMs) that power it. Claude is trained to have natural, text-based conversations, and it excels in tasks like summarization, editing, Q&A, decision-making, code-writing, and more.</p>
              </div>
            )}
            {selectedCard === 'Quillbot' && (
              <div>
                <img src={QuillbotIMG} className="modal-img" alt="Quillbot" />
                <h5>Quillbot</h5>
                <p>is an advanced AI-powered online writing and paraphrasing tool is an advanced AI-powered online. It makes use of cutting-edge natural language processing (NLP) techniques to help users write better, come up with new phrases, and improve the clarity and quality of their content.</p>
              </div>
            )}
            {selectedCard === 'Tiktok' && (
              <div>
                <img src={TiktokIMG} className="modal-img" alt="Tiktok" />
                <h5>Tiktok</h5>
                <p>is a popular social media app that allows users to create, watch, and share short videos shot on mobile devices or webcams. With its personalized feeds of quirky short videos set to music and sound effects, the app is notable for its addictive quality and high levels of engagement.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;