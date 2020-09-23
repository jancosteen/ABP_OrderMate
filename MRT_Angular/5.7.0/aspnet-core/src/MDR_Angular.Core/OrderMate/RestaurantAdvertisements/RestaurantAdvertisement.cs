using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Advertisements;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantAdvertisements
{
    public class RestaurantAdvertisement: Entity<int>
    {
        //public int RestaurantAdvertisesementId { get; set; }
        public int RestaurantIdFk { get; set; }
        public int AdvertisementIdFk { get; set; }

        [ForeignKey("AdvertisementIdFk")]
        public virtual Advertisement AdvertisementIdFkNavigation { get; set; }
        [ForeignKey("RestaurantIdFk")]
        public virtual Restaurant RestaurantIdFkNavigation { get; set; }
    }
}
