using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Advertisements;
using System;
using System.Collections.Generic;


namespace MDR_Angular.OrderMate.AdvertisementPrices
{
    public class AdvertisementPrice: Entity<int>
    {
        //public int AdvertisementPriceId { get; set; }
        public double AdvertismentPrice { get; set; }
        public DateTime AdvertisementPriceDateUpdated { get; set; }

        public virtual ICollection<Advertisement> Advertisement { get; set; }
    }
}
