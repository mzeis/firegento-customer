/**
 * This file is part of the FIREGENTO project.
 *
 * FireGento_Core is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This script is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * @author    FireGento Team <team@firegento.com>
 * @copyright 2013 FireGento Team (http://www.firegento.com). All rights served.
 * @license   http://opensource.org/licenses/gpl-3.0 GNU General Public License, version 3 (GPLv3)
 */

var validator = Validation.methods['validate-password'];
validator.test = function(v) {
	var pass=v.strip(); /*strip leading and trailing spaces*/
	return !(pass.length>0 && pass.length < 9);
};
validator.error = 'Please enter 9 or more characters. Leading or trailing spaces will be ignored.';
