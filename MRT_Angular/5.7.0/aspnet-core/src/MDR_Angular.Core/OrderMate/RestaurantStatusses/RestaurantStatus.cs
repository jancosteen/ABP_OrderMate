using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantStatusses
{
    public class RestaurantStatus: Entity<int>
    {
        //public int RestaurantStatusId { get; set; }
        public string RestaurantStatus1 { get; set; }

        public virtual ICollection<Restaurant> Restaurant { get; set; }
    }
}
