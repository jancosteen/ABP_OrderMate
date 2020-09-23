﻿using Abp.Domain.Entities;
using MDR_Angular.OrderMate.RestaurantImages;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantRestaurantImages
{
    public class RestaurantRestaurantImage: Entity<int>
    {
        public int RestaurantIdFk { get; set; }
        public int RestaurantImageIdFk { get; set; }
        //public int RestaurantRestaurantImageId { get; set; }

        [ForeignKey("RestaurantIdFk")]
        public virtual Restaurant RestaurantIdFkNavigation { get; set; }
        [ForeignKey("RestaurantImageIdFk")]
        public virtual RestaurantImage RestaurantImageIdFkNavigation { get; set; }
    }
}
