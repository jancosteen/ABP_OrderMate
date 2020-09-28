using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.SeatingLayouts
{
    public interface ISeatingLayoutAppService: IAsyncCrudAppService<SeatingLayoutDto>
    {
    }
}
