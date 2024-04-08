import dynamic from 'next/dynamic';
// import Map from "@/components/map/Component";

import { CloseRounded } from '@mui/icons-material';
import { Dialog, IconButton } from '@mui/material';
import 'leaflet/dist/leaflet.css';

const ModalMap: React.FC<ModalMapProps> = ({ open, onClose, dict }) => {
  const Map = dynamic(() => import('@/components/map/Component'), {
    ssr: false,
  });

  return (
    <Dialog fullScreen open={open} onClose={() => onClose('reason')}>
      <div
        className={
          'w-full relative flex flex-col px-[30px] sm:px-4 pb-[30px] z-20'
        }
      >
        <div className={'flex justify-between items-center'}>
          <span className={'text-[20px] text-[#000]'}>
            {dict?.modalMap?.title}
          </span>
          <IconButton onClick={onClose}>
            <CloseRounded sx={{ color: '#000' }} />
          </IconButton>
        </div>

        <div className={'w-full h-full relative'}>
          <Map />
        </div>
      </div>
    </Dialog>
  );
};

export default ModalMap;
