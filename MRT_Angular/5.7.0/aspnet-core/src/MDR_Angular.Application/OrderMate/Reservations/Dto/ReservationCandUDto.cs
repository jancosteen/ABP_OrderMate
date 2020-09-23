using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.Authorization.Users;
using MDR_Angular.OrderMate.ReservationRestaurants;
using MDR_Angular.OrderMate.ReservationStatusses;
using MDR_Angular.OrderMate.Seatings;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace MDR_Angular.OrderMate.Reservations
{
    [AutoMapFrom(typeof(Reservation))]
    [AutoMapTo(typeof(Reservation))]
    public class ReservationCandUDto
    {
        //public int ReservationId { get; set; }
        public DateTime ReservationDateCreated { get; set; }
        public DateTime ReservationDateReserved { get; set; }
        public int ReservationPartyQty { get; set; }
        public long UserIdFk { get; set; }
        public int? ReservationStatusIdFk { get; set; }
        public int ReservationNumberOfBills { get; set; }

       
    }
}
