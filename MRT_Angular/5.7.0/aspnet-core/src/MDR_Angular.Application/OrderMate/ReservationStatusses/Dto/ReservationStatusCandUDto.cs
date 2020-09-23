using Abp.AutoMapper;
using Abp.Domain.Entities;
using MDR_Angular.OrderMate.Reservations;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.ReservationStatusses
{
    [AutoMapFrom(typeof(ReservationStatus))]
    [AutoMapTo(typeof(ReservationStatus))]
    public class ReservationStatusCandUDto
    {
        //public int ReservationStatusId { get; set; }
        public string ReservationStatus1 { get; set; }

        
    }
}
