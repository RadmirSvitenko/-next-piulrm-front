interface HeaderTabs {
  name: string;
  url: string;
}

interface Languages {
  lang: string;
  value: string;
}

interface ModalHeaderProps {
  open: boolean;
  onClose: () => void;
  language: any;
  setLanguage: any;
}

interface ModalMapProps {
  open: boolean;
  onClose: any;
  dict: any;
}

interface Place {
  name: string;
  place: string;
  coordinates: [number, number];
  depth: string;
  temperature: string;
  speed: string;
  data: any;
}

interface TendersState {
  search: string;
  page: number;
  pageSize: number;
  order: number;
  count: number;
}

interface LandslidePointStatusesProps {
  page: number;
  dict: any;
}
