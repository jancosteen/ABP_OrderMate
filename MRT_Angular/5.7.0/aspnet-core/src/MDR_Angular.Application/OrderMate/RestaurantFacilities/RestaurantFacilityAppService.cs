using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.RestaurantFacilities
{
    [AbpAuthorize(PermissionNames.Pages_RF)]
    public class RestaurantFacilityAppService : AsyncCrudAppService<
        RestaurantFacility, RestaurantFacilityDto, int, PagedAndSortedResultRequestDto, RestaurantFacilityDto>, IRestaurantFacilityAppService
    {
        public RestaurantFacilityAppService(IRepository<RestaurantFacility> repository) : base(repository) { }
    }
}
