using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Advertisements;
using System;
using System.Collections.Generic;


namespace MDR_Angular.OrderMate.AdvertisementDates
{
    public class AdvertisementDate: Entity<int>
    {
        //public int AdvertisementDateId { get; set; }
        public DateTime AdvertisementDateAcvtiveFrom { get; set; }
        public DateTime AdvertisementDateActiveTo { get; set; }

        public virtual ICollection<Advertisement> Advertisement { get; set; }
    }
}
