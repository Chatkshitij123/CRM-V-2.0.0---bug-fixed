import React from "react";
import { Link } from "react-router-dom";

import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";





const Project = ()=> {
    return (
        <div>
            <PageHeader currentpage="Project" activepage="Element" mainpage="Project" />
        
        <div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<div className="flex">
								<h5 className="box-title my-auto">Project Summary</h5>
								<div className="hs-dropdown ti-dropdown block ltr:ml-auto rtl:mr-auto my-auto">
									<button type="button"
										className="hs-dropdown-toggle ti-dropdown-toggle rounded-sm p-1 px-3 !border border-gray-200 text-gray-400 hover:text-gray-500 hover:bg-gray-200 hover:border-gray-200 focus:ring-gray-200  dark:hover:bg-black/30 dark:border-white/10 dark:hover:border-white/20 dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                      View All <i className="ti ti-chevron-down"></i></button>
									<div className="hs-dropdown-menu ti-dropdown-menu">
										<Link className="ti-dropdown-item" to="#">Download</Link>
										<Link className="ti-dropdown-item" to="#">Import</Link>
										<Link className="ti-dropdown-item" to="#">Export</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="box-body">
							<div className="table-bordered rounded-sm ti-custom-table-head overflow-auto">
								<table className="ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead className="bg-gray-50 dark:bg-black/20">
										<tr className="">
											<th scope="col" className="dark:text-white/80">S.no</th>
											<th scope="col" className="dark:text-white/80">Project Title</th>
											<th scope="col" className="dark:text-white/80">Assigned To</th>
											<th scope="col" className="dark:text-white/80">Assigned By</th>
											<th scope="col" className="dark:text-white/80">Progress</th>
											<th scope="col" className="dark:text-white/80">Status</th>
											<th scope="col" className="dark:text-white/80">Due Date</th>
											<th scope="col" className="dark:text-white/80">Action</th>
										</tr>
									</thead>
									<tbody className="">
										<tr className="">
											<td>1</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Home Page</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg63')} alt="Image Description"/>
												</div>
											</td>
											<td>110<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 180</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">25%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>14-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>2</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Landing Design</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg62')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg63')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg75')} alt="Image Description"/>
												</div>
											</td>
											<td>95<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 100</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">90%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>20-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>3</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">New Template Design</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
												</div>
											</td>
											<td>0<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 50</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">0%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">Pending</span>
											</td>
											<td>29-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>4</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">HR Management Template Design</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">2+</span>
													</span>
												</div>
											</td>
											<td>30<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 70</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">40%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>18-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>5</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Designing New Template</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">3+</span>
													</span>
												</div>
											</td>
											<td>120<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 120</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">100%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Completed</span>
											</td>
											<td>02-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>6</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Documentation Project</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg77')} alt="Image Description"/>
												</div>
											</td>
											<td>40<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 80</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">50%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>05-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>7</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Developing Backend</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg60')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg77')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">3+</span>
													</span>
												</div>
											</td>
											<td>50<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 60</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">80%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>08-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>8</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Multipurpose Dashboard Template</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
												</div>
											</td>
											<td>0<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 60</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">0%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-warning/10 text-warning/80">Pending</span>
											</td>
											<td>30-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>9</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Design New Dashboard Template</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg59')} alt="Image Description"/>
												</div>
											</td>
											<td>100<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 100</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">100%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-success/10 text-success/80">Completed</span>
											</td>
											<td>03-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										<tr className="">
											<td>10</td>
											<td>
												<span className="text-sm text-gray-800 dark:text-white font-semibold">Server Side Validation</span>
											</td>
											<td>
												<div className="flex -space-x-2 rtl:space-x-reverse">
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg64')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg70')} alt="Image Description"/>
													<img className="inline-block avatar w-6 h-6 rounded-full" src= {ALLImages('jpg72')} alt="Image Description"/>
													<span className="inline-flex items-center justify-center avatar w-6 h-6  rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
														<span className="font-medium text-gray-500 leading-none dark:text-white/70">2+</span>
													</span>
												</div>
											</td>
											<td>80<span className="ltr:ml-1 rtl:mr-1 text-gray-500 dark:text-white/70 opacity-70">/ 160</span></td>
											<td>
												<div className="flex items-center">
													<div className="w-2/3">
														<div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
															<div className="ti-main-progress-bar bg-primary text-xs text-white text-center" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<div className="ltr:ml-2 rtl:mr-2">50%</div>
												</div>
											</td>
											<td><span
												className="truncate whitespace-nowrap inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary/80">In Progress</span>
											</td>
											<td>10-04-2023</td>
											<td className="font-medium space-x-2 rtl:space-x-reverse">
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-primary">
														<i className="ti ti-eye"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                View
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="customer-edit m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className="ti ti-pencil"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Edit
														</span>
													</Link>
												</div>
												<div className="hs-tooltip ti-main-tooltip">
													<Link to="#"
														className="m-0 hs-tooltip-toggle relative w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className="ti ti-trash"></i>
														<span
															className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700"
															role="tooltip">
                                Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
                        </div>
                        </div>
                        </div>
                        </div>

    )
}
export default Project;