export interface Banner {
  id: string;
  imageUrl: any;
  title?: string;

  // navigation handling
  redirectType?: 'salon' | 'offer' | 'external';
  redirectId?: string; // salonId | offerId | url
}

