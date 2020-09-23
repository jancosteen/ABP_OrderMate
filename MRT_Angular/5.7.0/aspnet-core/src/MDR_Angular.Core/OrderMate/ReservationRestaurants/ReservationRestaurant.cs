using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Reservations;
using MDR_Angular.OrderMate.Restaurants;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.ReservationRestaurants
{
    public class ReservationRestaurant: Entity<int>
    {
        //public int ReservationRestaurantId { get; set; }
        public int ReservationIdFk { get; set; }
        public int RestaurantIdFk { get; set; }

        [ForeignKey("ReservationIdFk")]
        public virtual Reservation ReservationIdFkNavigation { get; set; }
        [ForeignKey("RestaurantIdFk")]
        public virtual Restaurant RestaurantIdFkNavigation { get; set; }
    }
}
