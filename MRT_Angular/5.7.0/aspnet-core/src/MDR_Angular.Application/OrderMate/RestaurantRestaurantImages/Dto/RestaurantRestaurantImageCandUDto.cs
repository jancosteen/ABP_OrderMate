using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.RestaurantImages;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantRestaurantImages
{
    [AutoMapFrom(typeof(RestaurantRestaurantImage))]
    [AutoMapTo(typeof(RestaurantRestaurantImage))]
    public class RestaurantRestaurantImageCandUDto
    {
        public int RestaurantIdFk { get; set; }
        public int RestaurantImageIdFk { get; set; }
        //public int RestaurantRestaurantImageId { get; set; }

        
    }
}
