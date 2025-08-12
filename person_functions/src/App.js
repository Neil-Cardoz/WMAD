import logo from './logo.svg';
import './App.css';

export default function App() {
  {
    const [showModal, setShowModal] = React.useState(false);
    const [usePortal, setUsePortal] = React.useState(true);

    return (
      <div className="outer-container">
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        <label>
          <input
            type="checkbox"
            checked={usePortal}
            onChange={(e) => setUsePortal(e.target.checked)}
          />
          Use Portal
        </label>
        {showModal && (usePortal ? (
          <ModalPortalVersion onClose={() => setShowModal(false)}>
            <h2>Modal Content</h2>
            <p>This is a modal using React Portal.</p>
          </ModalPortalVersion>
        ) : (
          <ReactInlineVersion onClose={() => setShowModal(false)}>
            <h2>Modal Content</h2>
            <p>This is a modal using inline rendering.</p>
          </ReactInlineVersion>
        ))}
      </div>
    );
  }