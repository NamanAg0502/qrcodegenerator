import { Button, Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

const Home = () => {
  const [url, setUrl] = useState('');
  const [qrcode, setqrcode] = useState('');

  const handleSubmit = () => {
    setqrcode(url);
    setUrl('');
  };

  return (
    <div>
      <div className="w-full text-2xl font-semibold px-10 py-3 mb-12 text-white bg-blue-500">
        QrCode Generator
      </div>
      <div className="w-5/6 md:w-1/2 min-h-[60vh] lg:w-1/3 mx-auto flex flex-col space-y-5 justify-between items-center">
        <div className="flex flex-col items-center space-y-5 w-full">
          <Input
            label="Paste the url here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={handleSubmit}>Generate</Button>
        </div>
        <QRCode value={qrcode} />
      </div>
    </div>
  );
};

export default Home;
