using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Reservations;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.ReservationRestaurants
{
    [AutoMapFrom(typeof(ReservationRestaurant))]
    [AutoMapTo(typeof(ReservationRestaurant))]
    public class ReservationRestaurantCandUDto
    {
        //public int ReservationRestaurantId { get; set; }
        public int ReservationIdFk { get; set; }
        public int RestaurantIdFk { get; set; }


    }
}
