using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using MDR_Angular.Authorization;
using System;
using System.Collections.Generic;
using System.Text;

namespace MDR_Angular.OrderMate.StarRatings
{
    [AbpAuthorize(PermissionNames.Pages_SR)]
    public class StarRatingAppService : AsyncCrudAppService<
        StarRating, StarRatingDto, int, PagedAndSortedResultRequestDto, StarRatingDto>, IStarRatingAppService
    {
        public StarRatingAppService(IRepository<StarRating> repository) : base(repository) { }
    }
}
